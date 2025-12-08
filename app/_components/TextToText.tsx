"use client";

import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FileText, RotateCw, Sparkles } from "lucide-react";

export const TextToText = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(messages, "messages");

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch("/api/text-to-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat: userMessage }),
      });

      const data = await response.json();

      if (data.err) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `Error: ${data.err}` },
        ]);
      } else if (data.text) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.text },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Error: ${err}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card className="border-none shadow-none ">
      <CardHeader>
        <CardTitle>
          <div className="flex w-full h-fit justify-between">
            <div className="flex gap-2 justify-center items-center text-lg font-bold">
              <Sparkles />
              Ingredient recognition
            </div>
            <Button
              className="w-12 h-10"
              variant="outline"
              size="icon"
              aria-label="Submit"
            >
              <RotateCw />
            </Button>
          </div>
        </CardTitle>
        <CardDescription>
          Describe the food, and AI will detect the ingredients.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-3">
          <Input
            className="h-31"
            id="tabs-demo-name"
            placeholder="Орц тодорхойлох"
          />
        </div>
        <div className="flex justify-end">
          <Button className="h-10">Generate</Button>
        </div>
      </CardContent>
      <div>
        <CardFooter>
          <CardDescription>
            <div className="flex text-lg font-bold text-black gap-2">
              <FileText />
              Identified Ingredients
            </div>
            First, enter your text to recognize an ingredients.
          </CardDescription>
        </CardFooter>
      </div>
    </Card>
  );
};
