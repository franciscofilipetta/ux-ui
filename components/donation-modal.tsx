"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, Heart, Check } from "lucide-react";
import { formatCurrency } from "@/lib/data";
import { cn } from "@/lib/utils";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaignTitle: string;
}

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000, 25000];

export function DonationModal({
  isOpen,
  onClose,
  campaignTitle,
}: DonationModalProps) {
  const [amount, setAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handlePresetClick = (preset: number) => {
    setAmount(preset);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed) && parsed > 0) {
      setAmount(parsed);
    } else {
      setAmount(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setAmount(1000);
    setCustomAmount("");
    setName("");
    setMessage("");
    setIsAnonymous(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4">
      <div className="relative w-full max-w-md rounded-xl bg-background p-6 shadow-xl">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-foreground">
              Gracias por tu donacion!
            </h2>
            <p className="text-muted-foreground">
              Tu aporte de {formatCurrency(amount || 0)} ayudara a esta causa.
            </p>
            <Button onClick={handleClose} className="mt-6 w-full" size="lg">
              Cerrar
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                Hacer una donacion
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {campaignTitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="mb-3 block text-foreground">
                  Selecciona un monto
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {PRESET_AMOUNTS.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handlePresetClick(preset)}
                      className={cn(
                        "rounded-lg border-2 px-3 py-2 text-sm font-medium transition-all",
                        amount === preset && !customAmount
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-background text-foreground hover:border-primary/50"
                      )}
                    >
                      {formatCurrency(preset)}
                    </button>
                  ))}
                </div>
                <div className="mt-3">
                  <Input
                    type="number"
                    placeholder="Otro monto"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    min={1}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="name" className="text-foreground">
                  Tu nombre
                </Label>
                <Input
                  id="name"
                  placeholder="Juan Perez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isAnonymous}
                  className="mt-1.5"
                />
                <label className="mt-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-muted-foreground">
                    Donar de forma anonima
                  </span>
                </label>
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">
                  Mensaje de apoyo (opcional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tu mensaje de aliento..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="mt-1.5"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={!amount || amount <= 0}
              >
                Donar {amount ? formatCurrency(amount) : ""}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
