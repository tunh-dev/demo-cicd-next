type Params = {
  params: {
    slug: string
  }
}

export default function Page({ params }: Params) {
  return <>
  <h1>Slug: {params.slug}</h1>
  <p>DEMO CICD UET 2024</p>
  <p>Kien truc phan mem</p>
  </>
}
