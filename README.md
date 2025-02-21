## Am I a Bad Texter (v. 0.1.1)
Works with MacOS

Clone the Repository or Download as a Zip file
### Quick Start
First, once you have cloned or downloaded and unzipped the files into a location - open a terminal window and cd into the project directory.

If you dont have python installed - go online and install python through homebrew.

Run the shell script by executing the command (within your project directory):
```
./start_project.sh
```
When you see the green checkmark that says "compiled" - go to http://localhost:3000 to see if you are cooked! When you are done , simply press enter in the terminal project to kill the process.

### Manual Loading and Testing

You need to use the following packages to utilize

1. ```Poetry```
2. ```pnpm/npm/yarn equivalent```

Follow directions to install both. Then open up two command prompts

1. Within the second backend directory (badtexter/backend/backend) make sure to run 
    ```
    poetry install
    ```
    Then you can run 
    ```
    poetry run uvicorn main:app --reload
    ```
    Keep this terminal window open
2. In another terminal window, within the root folder for the project, run 
    ```
    pnpm next build
    ```
    and then 
    ```
    pnpm run dev
    ```
3. Go to http://localhost:3000 and see how bad of a texter you are!


## Troubleshooting

If your `chat.db` is not in the default location - find your chat.db path by running 
```
sudo find / -name chat.db 2>/dev/null
```
in your terminal. Then take this and replace the DB_PATH variable in line 35 of main.py


