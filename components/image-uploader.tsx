"use client";

import { useCallback, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UploadedImage {
  id: string;
  file: File;
  preview: string;
  slot: string;
}

interface ImageUploaderProps {
  onImagesUploaded: (images: UploadedImage[]) => void;
  uploadedImages: UploadedImage[];
}

export function ImageUploader({
  onImagesUploaded,
  uploadedImages
}: ImageUploaderProps) {
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes

  const imageSlots = [
    {
      id: "hero",
      label: "Hero Image",
      description: "Main banner image (1920x1080 recommended)"
    },
    {
      id: "about",
      label: "About Image",
      description: "About section image (800x600 recommended)"
    },
    { id: "feature1", label: "Feature 1", description: "First feature image" },
    { id: "feature2", label: "Feature 2", description: "Second feature image" },
    { id: "feature3", label: "Feature 3", description: "Third feature image" }
  ];

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleFiles = useCallback(
    (files: File[], slotId: string) => {
      const imageFiles = files.filter((file) => file.type.startsWith("image/"));

      if (imageFiles.length === 0) {
        toast({
          title: "Invalid file type",
          description: "Please upload only image files (JPG, PNG, WebP)",
          variant: "destructive"
        });
        return;
      }

      const file = imageFiles[0]; // Take only the first file for single slot

      // Check file size (2MB limit)
      if (file.size > MAX_FILE_SIZE) {
        toast({
          title: "File too large",
          description: `Image must be less than 2MB. Your file is ${(
            file.size /
            1024 /
            1024
          ).toFixed(2)}MB`,
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        const newImage: UploadedImage = {
          id: Date.now().toString(),
          file: file,
          preview: e.target?.result as string,
          slot: slotId
        };

        // Remove existing image for this slot and add new one
        const filteredImages = uploadedImages.filter(
          (img) => img.slot !== slotId
        );
        onImagesUploaded([...filteredImages, newImage]);

        toast({
          title: "Image uploaded",
          description: `${file.name} (${(file.size / 1024).toFixed(
            0
          )}KB) uploaded successfully`
        });
      };

      reader.readAsDataURL(file);
    },
    [uploadedImages, onImagesUploaded, toast, MAX_FILE_SIZE]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent, slotId: string) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      const files = Array.from(e.dataTransfer.files);
      handleFiles(files, slotId);
    },
    [handleFiles]
  );

  const handleFileInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    slotId: string
  ) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files, slotId);
  };

  const removeImage = (imageId: string) => {
    onImagesUploaded(uploadedImages.filter((img) => img.id !== imageId));
  };

  const getImageForSlot = (slotId: string) => {
    return uploadedImages.find((img) => img.slot === slotId);
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Upload Your Images</h3>
        <p className="text-sm text-muted-foreground">
          Upload images for different sections of your website. Max 2MB per
          image.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {imageSlots.map((slot) => {
          const existingImage = getImageForSlot(slot.id);

          return (
            <Card key={slot.id}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">
                  {slot.label}
                </CardTitle>
                <CardDescription className="text-xs">
                  {slot.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {existingImage ? (
                  <div className="relative group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={existingImage.preview}
                      alt={slot.label}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => removeImage(existingImage.id)}
                      >
                        <X className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                    <Badge className="absolute top-2 right-2">
                      {(existingImage.file.size / 1024).toFixed(0)} KB
                    </Badge>
                  </div>
                ) : (
                  <label
                    htmlFor={`file-${slot.id}`}
                    className={`
                      flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-lg
                      cursor-pointer transition-colors
                      ${
                        dragActive
                          ? "border-primary bg-primary/10"
                          : "border-muted-foreground/25 hover:border-primary/50"
                      }
                    `}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={(e) => handleDrop(e, slot.id)}
                  >
                    <input
                      id={`file-${slot.id}`}
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleFileInput(e, slot.id)}
                    />
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-xs text-muted-foreground text-center px-2">
                      Drop image or click to browse
                    </p>
                  </label>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {uploadedImages.length > 0 && (
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
          <div className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">
              {uploadedImages.length} image
              {uploadedImages.length !== 1 ? "s" : ""} uploaded
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onImagesUploaded([])}
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
}
