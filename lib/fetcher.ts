const fetcher = (url: string) => {
  return fetch(url)
    .then((res) => {
      console.log(res);

      // Check if the response status is ok (2xx)
      if (!res.ok) {
        throw new Error(`Request failed with status: ${res.status}`);
      }

      // Use the .json() method to parse JSON content
      return res.json();
    })
    .catch((err) => {
      console.log(err);
      throw err; // Rethrow the error to maintain the promise rejection
    });
};

export default fetcher;
