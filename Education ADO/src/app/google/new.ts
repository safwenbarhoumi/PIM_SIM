gapi.client.drive.files
  .create({
    resource: {
      name: 'new',
    },
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
