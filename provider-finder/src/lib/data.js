import faker from "faker";

function getAllProviders() {
  const usages = ["Browsing/Emailing", "Streaming/Consuming Media", "Gaming"];

  const providers = [];
  for (let i = 0; i < 100; i++) {
    let usage = faker.random.arrayElement(usages);
    let devices = faker.random.number(30) + 2;
    let budget = faker.random.number(100) + 5;
    let name = faker.company.companyName();
    let link = faker.internet.url();
    providers.push({ usage, devices, budget, name, link });
  }
  return providers;
}

export const getProviders = ({ usage, devices, budget }) => {
  const allProviders = getAllProviders();
  return allProviders
    .filter((p) => p.usage === usage)
    .filter((p) => p.devices >= devices)
    .filter((p) => p.budget <= budget);
};
