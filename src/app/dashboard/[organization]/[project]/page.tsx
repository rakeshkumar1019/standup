export default function Project({params}: {params:{organization: string, project: string}}) {
     const {organization, project} = params
    if (!organization || !project) {
        return <h1>No project</h1>
}    
    return <div>  
        <h1>organization {organization} Project {project}</h1>  
    </div>  }