console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Sokha Sen!",
    icon: "https://is5-ssl.mzstatic.com/image/thumb/Purple49/v4/0a/a7/82/0aa782b6-355d-6fc3-2ab4-eb72229d6e80/source/512x512bb.jpg"
  });
});