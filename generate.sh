#!/bin/bash

# Check if a subdomain was provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <subdomain>"
    exit 1
fi

subdomain=$1

# Directory to store the downloaded Swagger JSON files
swagger_dir="swagger"
mkdir -p "$swagger_dir"

# Array of pages to process
pages=(
    "accountservices"
    "administrator"
    "exports"
    "home"
    "mobile"
    "pages"
    "plugins"
    "reports"
    "settings"
    "utilities"
    "integrations"
)

# Loop through each page and download the Swagger JSON
for page in "${pages[@]}"; do
    echo "Downloading Swagger JSON for $page..."
    curl -o "${swagger_dir}/${page}.json" "https://${subdomain}.rentalworksweb.com/swagger/${page}-v1/swagger.json"
done

echo "Download complete."

# Loop through each page and generate the TypeScript files
for page in "${pages[@]}"; do
    echo "Generating TypeScript files for $page..."
    npx oazapfts "${swagger_dir}/${page}.json" "src/generated/${page}.ts" --optimistic --useEnumType

    # Replace the import statement with the correct path (for deno)
    sed -i '' 's|import \* as Oazapfts from "@oazapfts/runtime";|import { Oazapfts, QS } from "../../deps.ts";|g' "src/generated/${page}.ts"
    sed -i '' '/import \* as QS from "@oazapfts\/runtime\/query";/d' "src/generated/${page}.ts"
done

echo "Generation complete."
