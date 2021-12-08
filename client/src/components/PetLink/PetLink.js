const PetLink =(href, pet) => {
    return (
        <a href={href} id={pet.id} pet ={pet}> Learn More  </a>
    )
}

export default PetLink