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

export const TextToImage = () => {
  return (
    <Card className="border-none shadow-none ">
      <CardHeader>
        <CardTitle>
          <div className="flex w-full h-fit justify-between">
            <div className="flex gap-2 justify-center items-center text-lg font-bold">
              <Sparkles />
              Food image creator
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
          What food image do you want? Describe it briefly.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-3">
          <Input
            className="h-32.5"
            id="tabs-demo-name"
            placeholder="Хоолны тайлбар"
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
              Result
            </div>
            First, enter your text to generate an image.
          </CardDescription>
        </CardFooter>
      </div>
    </Card>
  );
};
