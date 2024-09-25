'''
    Consulta a API de geocoding de Google
    https://developers.google.com/maps/documentation/geocoding/overview
'''
import requests

def geocode(address, api_key):
    base_url = "https://maps.googleapis.com/maps/api/geocode/json"
    
    # Parámetros para la solicitud
    params = {
        'address': address,
        'key': api_key
    }

    # Realizar la solicitud
    response = requests.get(base_url, params=params)
    
    # Verificar el estado de la solicitud
    if response.status_code == 200:
        # Parsear el JSON devuelto por la API
        data = response.json()
        
        if data['status'] == 'OK':
            # Obtener las coordenadas (latitud y longitud)
            location = data['results'][0]['geometry']['location']
            latitude = location['lat']
            longitude = location['lng']
            return latitude, longitude
        else:
            print(f"Error en la respuesta de la API: {data['status']}")
            return None
    else:
        print(f"Error al hacer la solicitud: {response.status_code}")
        return None
