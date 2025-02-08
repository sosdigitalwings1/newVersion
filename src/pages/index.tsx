import Head from "next/head";
import React, { useState, useEffect } from "react";
import { HeroSection } from "components/HeroSection";
import { Header } from "components/Header";
// import { ProductCarousel } from "components/Carousel/ProductCarousel";
import { GenderCategories } from "components/GenderCategories";
import { AdvertisingSection } from "components/advertisingSection";
import { NewsSection } from "components/NewsSection";
import { Footer } from "components/Footer";
import { ProductCarousel } from "components/Product/ProductCarousel";
import { sampleProducts } from "components/Product/sampleProduct";
import router from "next/router";

// Define the data structure for a project
// type Project = {
//   projectName: string;
//   projectDesc: string;
//   projectDuration: string;
//   projectImage: string;
//   projectLink: string;
// };

// // Define the structure of props received by the Home component
// type DataProps = {
//   projectsData: Project[];
//   projectsDataWeb: Project[];
// };

// type Props = { data: DataProps };

// // // Fetch the data at build time and pass it as props to the component
// export async function getStaticProps() {
//   const data = {
//     projectsData: [
//       {
//         projectName: "Project 1",
//         projectDesc: "Description for project 1",
//         projectDuration: "3 months",
//         projectImage: "/assets/projects/mobile/1.png",
//         projectLink: "https://example.com/project1",
//       },
//       {
//         projectName: "Project 2",
//         projectDesc: "Description for project 2",
//         projectDuration: "6 months",
//         projectImage: "/assets/projects/mobile/2.png",
//         projectLink: "https://example.com/project2",
//       },
//       {
//         projectName: "Project 3",
//         projectDesc: "Description for project 3",
//         projectDuration: "3 months",
//         projectImage: "/assets/projects/mobile/3.png",
//         projectLink: "https://example.com/project3",
//       },
//       {
//         projectName: "Project 4",
//         projectDesc: "Description for project 4",
//         projectDuration: "6 months",
//         projectImage: "/assets/projects/mobile/4.png",
//         projectLink: "https://example.com/project4",
//       },
//       {
//         projectName: "Project 5",
//         projectDesc: "Description for project 5",
//         projectDuration: "3 months",
//         projectImage: "/assets/projects/mobile/5.png",
//         projectLink: "https://example.com/project5",
//       },
//       {
//         projectName: "Project 6",
//         projectDesc: "Description for project 6",
//         projectDuration: "6 months",
//         projectImage: "/assets/projects/mobile/6.png",
//         projectLink: "https://example.com/project6",
//       },
//     ],
//     projectsDataWeb: [
//       {
//         projectName: "Project 3",
//         projectDesc: "Description for project 3",
//         projectDuration: "3 months",
//         projectImage: "/assets/about.png",
//         projectLink: "https://example.com/project3",
//       },
//       {
//         projectName: "Project 4",
//         projectDesc: "Description for project 4",
//         projectDuration: "6 months",
//         projectImage: "/assets/about.png",
//         projectLink: "https://example.com/project4",
//       },
//       {
//         projectName: "Project 5",
//         projectDesc: "Description for project 5",
//         projectDuration: "3 months",
//         projectImage: "/assets/about.png",
//         projectLink: "https://example.com/project5",
//       },
//       {
//         projectName: "Project 6",
//         projectDesc: "Description for project 6",
//         projectDuration: "6 months",
//         projectImage: "/assets/about.png",
//         projectLink: "https://example.com/project6",
//       },
//     ],
//   };

//   return { props: { data }, revalidate: 86400 }; // Regenerate every 24 hours
// }

// export default function Home({ data }: Props) {
  export default function Home() {

  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <Head>
        <title>SOS Digital Wings</title>
      </Head>
      <Header/>
      <HeroSection onDiscoverClick={() => router.push("/collection/products")} />
        {/* <section className="snap-start snap-mandatory max-h-screen overflow-clip">
          <Carousel data={data} />
        </section> */}
        <ProductCarousel products={sampleProducts} />        
        <GenderCategories />
                
        <AdvertisingSection />
        
        <NewsSection />
          
      <Footer />
    </div>
  );
}
