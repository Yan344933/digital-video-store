
const sendRequest = (url, method, body) => {

    return new Promise((resolve, reject) => {

        let ok;

        fetch(
            url,
            {
                method: method,
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((res) => {
            ok = res.ok
            return res.json()
        }).then((data) => {
            if (!ok){
                reject(data.message)
            }
            else resolve()
        })
    })

}

export default sendRequest;