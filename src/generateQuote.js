import axios from "axios";

function generateQuote() {
    const config = {
        headers: {
            Accept: 'application/json',
        }
    }

    axios.get('https://jsonplaceholder.typicode.com/users', config)
        .then((res) => {
            var result = res.data.map((e) => {
                return e.name
            })
            console.log(result);
            // document.getElementById('motivate').innerHTML = result
        }).catch((err) => {
            console.log(err.message);
        })
}

export default generateQuote;