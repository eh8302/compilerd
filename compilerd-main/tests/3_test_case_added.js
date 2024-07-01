const testCases = [
    // Existing test cases...

    // Swift Test Cases
    {
        name: 'swift : hello world',
        reqObject: {
            language: 'swift',
            script: 'print("hello world")',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'swift : print stdin',
        reqObject: {
            language: 'swift',
            script: 'while let line = readLine() { print(line) }',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },

    // Go Test Cases
    {
        name: 'go : hello world',
        reqObject: {
            language: 'go',
            script: 'package main\nimport "fmt"\nfunc main() {\n fmt.Println("hello world")\n}',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'go : print stdin',
        reqObject: {
            language: 'go',
            script: 'package main\nimport "fmt"\nfunc main() {\n var a int\n for {\n _, err := fmt.Scanf("%d", &a)\n if err != nil {\n break\n }\n fmt.Println(a)\n }\n}',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },

    // PHP Test Cases
    {
        name: 'php : hello world',
        reqObject: {
            language: 'php',
            script: '<?php echo "hello world"; ?>',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'php : print stdin',
        reqObject: {
            language: 'php',
            script: '<?php while ($line = fgets(STDIN)) { echo $line; } ?>',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
];
