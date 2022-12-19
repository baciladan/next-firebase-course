import { useRouter } from "next/router";

// Head component used for meta tags ( Provides SEO optimization )
import Head from "next/head";

export default function Car({ car }) {
  // Dynamic Route
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>
          Car - {car.color} {car.id}
        </title>
      </Head>
      <h1>Hello {id}</h1>
      <img src={car.imageUrl} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  // SSR ( Server-Side-Render )
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { car: data },
  };
}

// export async function getStaticProps({ params }) {
//   // SSG ( Pre-render )
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: { car: data },
//   };
// }

// export async function getStaticPaths() {
//   const req = await fetch("http://localhost:3000/cars.json");
//   const data = await req.json();

//   const paths = data.map((car) => {
//     return { params: { id: car } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
