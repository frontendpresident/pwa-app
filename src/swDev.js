export default async function swDev() {
  const swURL = `${process.env.PUBLIC_URL}/sw.js`;
  await navigator.serviceWorker.register(swURL);
}
