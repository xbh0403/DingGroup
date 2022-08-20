const getPeople = async () => {
    const response = await fetch('http://localhost:3001/people', {
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
    getPeople,
}

export default exportObject;