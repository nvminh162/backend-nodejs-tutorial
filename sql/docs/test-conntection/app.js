const express = require('express')
const mysql = require('mysql2');
const app = express()
const port = 9000

app.get('/old', (req, res) => {
    try {
        let totalExec = 0;
        for (let i = 0; i < 1000; i++) {
            let pre_query = new Date().getTime();
            let con = null;
            con = mysql.createConnection({
                host: 'localhost',
                port: 3307,
                user: 'root',
                database: 'nvminh162',
                password: 'root'
            })

            con.query(
                'SELECT * FROM Users',
                function (err, results, fields) {
                    // get a timestamp after running the query
                    const post_query = new Date().getTime();
                    const duration = (post_query - pre_query) / 1000; //unit: second
                    totalExec += duration;

                    console.log(">>>", " i = ", i, " duration = ", duration)

                    if (i == 999) {
                        const ave = totalExec / 1000;
                        return res.send("Average = " + ave)
                    }


                }
            );

            con.destroy();
        }
    } catch (error) {
        console.log(">>> check error old: ", error)
    }

})

app.get('/pool', (req, res) => {
    try {
        let totalExec = 0;

        let con = mysql.createPool({
            host: 'localhost',
            port: 3307,
            user: 'root',
            database: 'nvminh162',
            password: 'root',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        })

        for (let i = 0; i < 1000; i++) {
            let pre_query = new Date().getTime();
            con.query(
                'SELECT * FROM Users',
                function (err, results, fields) {
                    // get a timestamp after running the query
                    const post_query = new Date().getTime();
                    const duration = (post_query - pre_query) / 1000; //unit: second
                    totalExec += duration;

                    console.log(">>>", " i = ", i, " duration = ", duration)

                    if (i == 999) {
                        const ave = totalExec / 1000;
                        return res.send("Average = " + ave)
                    }
                }
            );

        }
    } catch (error) {
        console.log(">>> check error pool: ", error)
    }
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});