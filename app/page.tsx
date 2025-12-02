import { FileText, RotateCw, Sparkles } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex w-full max-w-[580px] flex-col gap-6">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="Image analysis">Image analysis</TabsTrigger>
            <TabsTrigger value="Ingredient recognition">
              Ingredient recognition
            </TabsTrigger>
            <TabsTrigger value="Image creator">Image creator</TabsTrigger>
          </TabsList>
          <TabsContent value="Image analysis">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex w-full h-fit justify-between">
                    <div className="flex gap-2 justify-center items-center text-lg font-bold">
                      <Sparkles />
                      Image analysis
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
                  Upload a food photo, and AI will detect the ingredients.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Input
                    className="h-10"
                    id="tabs-demo-name"
                    placeholder="JPG , PNG"
                    type="file"
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
                      Here is the summary
                    </div>
                    Upload a food photo, and AI will detect the ingredients.
                  </CardDescription>
                </CardFooter>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="Ingredient recognition">
            <Card>
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
          </TabsContent>
          <TabsContent value="Image creator">
            <Card>
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
