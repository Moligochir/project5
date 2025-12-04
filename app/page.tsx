"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileText, RotateCw, Sparkles, Trash } from "lucide-react";
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

type DetectedObject = {
  label: string;
  score: number;
  box: { xmin: number; ymin: number; xmax: number; ymax: number };
};

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [objects, setObjects] = useState<DetectedObject[]>([]);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
      setObjects([]);
    }
  };

  const handleDetect = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setObjects([]);

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const data = await (
        await fetch("/api/object-derection", {
          method: "POST",
          body: formData,
        })
      ).json();

      setObjects(data.object || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // const handleImageChange = (event) => {
  //   const files = event.target.files;
  //   if (files && files.length > 0) {
  //     const file = files[0];
  //     setSelectedImage(file);

  //     setPreviewUrl(URL.createObjectURL(file));
  //   }
  // };
  const removeSelectedImage = () => {
    setSelectedFile(null);

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }
    setImagePreview("");
  };
  return (
    <div>
      <div className="flex w-full justify-start items-center">
        <h1 className="p-4 pl-12 text-xl font-bold">AI tools</h1>
      </div>
      <hr className="w-full" />
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
              <Card className="border-none shadow-none ">
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
                      accept="image/*" // Restrict file selection to images
                      type="file"
                      onChange={handleImageUpload}
                    />

                    {imagePreview && (
                      <div style={{ marginTop: "5px" }}>
                        <h3 className="text-[#71717A] text-sm p-2">
                          Upload a food photo, and AI will detect the
                          ingredients.
                        </h3>
                        <div className="flex relative w-full justify-end items-end">
                          <Image
                            className="relative"
                            src={imagePreview}
                            alt="Preview"
                            width={100}
                            height={50}
                            layout="responsive"
                            objectFit="contain"
                          />

                          <div className="absolute p-3">
                            <Button
                              onClick={removeSelectedImage}
                              className=" bg-white text-black"
                            >
                              <Trash />
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={handleDetect}
                      disabled={!imagePreview}
                      className="h-10"
                    >
                      {loading ? "Generating..." : "Generate"}
                    </Button>
                  </div>
                </CardContent>
                <div>
                  <CardFooter>
                    <CardDescription>
                      <div className="flex text-lg font-bold text-black gap-2">
                        <FileText />
                        Here is the summary
                      </div>
                      <p>
                        Upload a food photo, and AI will detect the ingredients.
                      </p>

                      {objects.map((obj, idx) => (
                        <li
                          key={idx}
                          className="p-4 w-full bg-gray-100 rounded-lg"
                        >
                          <strong>{obj.label}</strong>
                          {Math.round(obj.score * 100)}%
                        </li>
                      ))}
                    </CardDescription>
                  </CardFooter>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="Ingredient recognition">
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
            </TabsContent>
            <TabsContent value="Image creator">
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
