---
title: Converting images to webp
description: Simple script to convert images to webp
date: '2025-03-25'
categories:
  - scripts
published: true
---

Just sharing a simple script I wrote to convert images to webp format. Should be easy to use to improve your website speed

```
#!/bin/bash

# Function to convert images to WebP
convert_images_to_webp() {
    directory="$1"

    # Check if the directory exists
    if [ ! -d "$directory" ]; then
        echo "Invalid directory path!"
        exit 1
    fi

    # Loop through all image files in the directory
    for img in "$directory"/*.{jpg,jpeg,png,gif,bmp,tiff}; do
        # Check if the file exists and is an image
        if [ -f "$img" ]; then
            # Get the filename without extension
            filename=$(basename "$img")
            filename_noext="${filename%.*}"

            # Convert the image to WebP
            cwebp "$img" -o "$directory/$filename_noext.webp"
            if [ $? -eq 0 ]; then
                echo "Converted $filename to WebP."
            else
                echo "Failed to convert $filename."
            fi
        fi
    done
}

# Check if the directory path is passed as a command line argument
if [ -z "$1" ]; then
    echo "Please provide the path to the directory as a command-line argument."
    exit 1
fi

# Convert images
convert_images_to_webp "$1"
```

It can be used like this

```
./script some_directory
```
Hope you enjoy this, even though most people could ChatGPT it in 20 seconds.
