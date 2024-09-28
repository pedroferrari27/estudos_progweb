import os

# Set the target folder (current directory)
target_folder = '.'

# Loop through all directories and subdirectories
for root, dirs, files in os.walk(target_folder):
    for dir_name in dirs:
        # Get the full path of the subfolder
        subfolder_path = os.path.join(root, dir_name)
        print(f"Checking {subfolder_path}...")

        # Define file paths
        index_file = os.path.join(subfolder_path, 'index.html')
        style_file = os.path.join(subfolder_path, 'style.css')
        script_file = os.path.join(subfolder_path, 'script.js')

        # Create index.html if it doesn't exist
        if not os.path.exists(index_file):
            with open(index_file, 'w') as f:
                f.write("""<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Titulo</title>
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>""")
            print(f"Created {index_file}")
        else:
            print(f"{index_file} already exists, skipping.")

        # Create style.css if it doesn't exist
        if not os.path.exists(style_file):
            with open(style_file, 'w') as f:
                f.write("body { font-family: Arial, sans-serif; background-color: #f4f4f4; }")
            print(f"Created {style_file}")
        else:
            print(f"{style_file} already exists, skipping.")

        # Create script.js if it doesn't exist
        if not os.path.exists(script_file):
            with open(script_file, 'w') as f:
                f.write("""let inputField = document.getElementById("myInput");""")
            print(f"Created {script_file}")
        else:
            print(f"{script_file} already exists, skipping.")

print("Script completed.")
