// ডাটা ফেচ করতে হবে - Done
// ফেচ করা ডাটা ডিসপ্লে করাতে হবে। - Done
// See More বাটন কে ফাংশনাল করবো। - Done
// See More এ একবার ক্লিক হলে এটা হাইড হয়ে যাবে
const loadData = () => {
  const url = "https://bd-education-techsoros.vercel.app/v1/all/";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayData(data.result.slice(0, 4)));
};

////object prototype
// const uni = {
//   id: 66,
//   name: "Sylhet International University",
//   universityType: "private",
//   established_in: 2001,
//   description:
//     "Sylhet International University (SIU) is a private university located in Sylhet, Bangladesh. Established in 2001, the university offers undergraduate and graduate programs in various disciplines such as Business Administration, Computer Science, Engineering, Law, Social Sciences, and Humanities. The university is committed to providing quality education that meets the international standards of higher education. SIU is equipped with modern facilities such as a well-stocked library, computer labs, and Wi-Fi connectivity. The university also provides a range of extracurricular activities, including sports, cultural events, and clubs to enhance the overall development of students. SIU aims to produce skilled graduates who are capable of contributing to the socio-economic development of the country.",
//   logo: {
//     title: "SIU",
//     color: "rgba(28,126,67,0.3)",
//   },
// };
const displayData = (universities) => {
  const container = document.getElementById("display-container");
  container.innerHTML = "";
  console.log(container);
  universities.forEach((uni) => {
    const col = document.createElement("div");
    col.classList.add("col");

    col.innerHTML = `
   
                  <div class="card mb-3" style="max-width: 540px;">
                     <div class="row g-0">
                        <div class="col-md-4">
                           <div style="background:${uni.logo.color}"
                              class="d-flex h-100 align-items-center justify-content-center">
                              <h2>${uni.logo.title}</h2>
                           </div>
                        </div>
                        <div class="col-md-8">
                           <div class="card-body">
                              <h5 class="card-title">${uni.name}</h5>
                              <p class="card-text">
                              ${
                                uni.description
                                  ? uni.description.slice(0, 100)
                                  : "No Data Found"
                              } ...
                              </p>
                              <button onclick="displayDetail(3)" class="btn btn-dark" data-bs-toggle="modal"
                                 data-bs-target="#uniModal">See Details</button>
                           </div>
                        </div>
                     </div>
                  </div>
   
    `;
    container.append(col);
    console.log(uni);
  });
};

document.getElementById("see-more-btn").addEventListener("click", () => {
  const url = "https://bd-education-techsoros.vercel.app/v1/all/";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayData(data.result);
      document.getElementById("see-more-btn").style.display = "none";
    });
});

loadData();
