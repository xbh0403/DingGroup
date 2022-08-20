const getPapers = async () => {
    const response = await fetch('http://localhost:3001/papers', {
        method: 'GET'
    });

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }
    return data
}

const exportObject = {
    getPapers,
}

export default exportObject;