## Am I a Bad Texter (v. 0.1.0)
Works with MacOS  
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


