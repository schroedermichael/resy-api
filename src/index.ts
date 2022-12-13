import ResyService from "./controllers/ResyService";

const run = async () => {
  const service = new ResyService({
    email: process.env.RESY_EMAIL!,
    password: process.env.RESY_PASSWORD!,
  });
  const loginResp = await service.generateHeadersAndLogin();
  console.log(
    await service.searchByName({
      query: "Carbone",
      geo: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    })
  );
  const data = loginResp.data;
  console.log(loginResp);
};

run();
