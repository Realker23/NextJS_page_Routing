


export default function Docs({params}:{params:{slug:string[]}}){
    return <h1>Doc page with never ending URL - {params.slug[0]}/{params?.slug[1]}</h1>
}