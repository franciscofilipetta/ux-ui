"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryLabels, type CampaignCategory } from "@/lib/types";
import { Upload, Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  title: string;
  category: CampaignCategory | "";
  description: string;
  story: string;
  goalAmount: string;
  location: string;
  imageUrl: string;
}

interface FormErrors {
  title?: string;
  category?: string;
  description?: string;
  story?: string;
  goalAmount?: string;
}

export function CampaignForm() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    category: "",
    description: "",
    story: "",
    goalAmount: "",
    location: "",
    imageUrl: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "El titulo es obligatorio";
    } else if (formData.title.length < 10) {
      newErrors.title = "El titulo debe tener al menos 10 caracteres";
    }

    if (!formData.category) {
      newErrors.category = "Selecciona una categoria";
    }

    if (!formData.description.trim()) {
      newErrors.description = "La descripcion es obligatoria";
    } else if (formData.description.length < 20) {
      newErrors.description = "La descripcion debe tener al menos 20 caracteres";
    }

    if (!formData.story.trim()) {
      newErrors.story = "Cuenta tu historia";
    } else if (formData.story.length < 100) {
      newErrors.story = "La historia debe tener al menos 100 caracteres";
    }

    const amount = parseInt(formData.goalAmount, 10);
    if (!formData.goalAmount) {
      newErrors.goalAmount = "El objetivo es obligatorio";
    } else if (isNaN(amount) || amount < 1000) {
      newErrors.goalAmount = "El objetivo debe ser de al menos $1.000";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-card-foreground">
          Campana creada con exito!
        </h2>
        <p className="mb-6 text-muted-foreground">
          Tu campana esta siendo revisada y pronto estara disponible.
        </p>
        <Button asChild>
          <a href="/">Volver al inicio</a>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div>
        <Label htmlFor="title" className="text-foreground">
          Titulo de la campana *
        </Label>
        <Input
          id="title"
          placeholder="Ej: Ayuda para reconstruir el club del barrio"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className={cn("mt-1.5", errors.title && "border-destructive")}
        />
        {errors.title && (
          <p className="mt-1 flex items-center gap-1 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            {errors.title}
          </p>
        )}
      </div>

      {/* Category */}
      <div>
        <Label htmlFor="category" className="text-foreground">
          Categoria *
        </Label>
        <Select
          value={formData.category}
          onValueChange={(value) => handleChange("category", value)}
        >
          <SelectTrigger
            className={cn("mt-1.5", errors.category && "border-destructive")}
          >
            <SelectValue placeholder="Selecciona una categoria" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(categoryLabels).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.category && (
          <p className="mt-1 flex items-center gap-1 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            {errors.category}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <Label htmlFor="description" className="text-foreground">
          Descripcion breve *
        </Label>
        <Textarea
          id="description"
          placeholder="Resume en pocas palabras el objetivo de tu campana"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          rows={3}
          className={cn("mt-1.5", errors.description && "border-destructive")}
        />
        {errors.description && (
          <p className="mt-1 flex items-center gap-1 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            {errors.description}
          </p>
        )}
      </div>

      {/* Story */}
      <div>
        <Label htmlFor="story" className="text-foreground">
          Tu historia *
        </Label>
        <p className="mb-1.5 text-sm text-muted-foreground">
          Cuenta con detalle por que necesitas ayuda. Las historias emotivas
          conectan mejor con los donantes.
        </p>
        <Textarea
          id="story"
          placeholder="Cuenta tu historia aqui..."
          value={formData.story}
          onChange={(e) => handleChange("story", e.target.value)}
          rows={6}
          className={cn(errors.story && "border-destructive")}
        />
        <div className="mt-1 flex items-center justify-between">
          {errors.story ? (
            <p className="flex items-center gap-1 text-sm text-destructive">
              <AlertCircle className="h-4 w-4" />
              {errors.story}
            </p>
          ) : (
            <span />
          )}
          <span className="text-sm text-muted-foreground">
            {formData.story.length}/100 caracteres minimo
          </span>
        </div>
      </div>

      {/* Goal Amount */}
      <div>
        <Label htmlFor="goalAmount" className="text-foreground">
          Objetivo economico (ARS) *
        </Label>
        <div className="relative mt-1.5">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            $
          </span>
          <Input
            id="goalAmount"
            type="number"
            placeholder="100000"
            value={formData.goalAmount}
            onChange={(e) => handleChange("goalAmount", e.target.value)}
            className={cn("pl-7", errors.goalAmount && "border-destructive")}
            min={1000}
          />
        </div>
        {errors.goalAmount && (
          <p className="mt-1 flex items-center gap-1 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            {errors.goalAmount}
          </p>
        )}
      </div>

      {/* Location */}
      <div>
        <Label htmlFor="location" className="text-foreground">
          Ubicacion (opcional)
        </Label>
        <Input
          id="location"
          placeholder="Ej: Buenos Aires, Argentina"
          value={formData.location}
          onChange={(e) => handleChange("location", e.target.value)}
          className="mt-1.5"
        />
      </div>

      {/* Image Upload (simulated) */}
      <div>
        <Label className="text-foreground">Imagen principal (opcional)</Label>
        <div className="mt-1.5 flex items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary/30 px-6 py-10 transition-colors hover:border-primary/50">
          <div className="text-center">
            <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
            <p className="mt-2 text-sm font-medium text-foreground">
              Arrastra una imagen o hace click
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              PNG, JPG hasta 5MB
            </p>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          * Campos obligatorios
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Publicando..." : "Publicar campana"}
        </Button>
      </div>
    </form>
  );
}
