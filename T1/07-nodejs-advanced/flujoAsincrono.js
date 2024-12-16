async function flujoAsincrono() {
    const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('La solicitud no se completó correctamente');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  flujoAsincrono();
  