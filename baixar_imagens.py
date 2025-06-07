import os
import requests
from dotenv import load_dotenv

# Carregar a chave da API do arquivo .env
load_dotenv()
API_KEY = os.getenv('PEXELS_API_KEY')

# Cabeçalhos para autenticação
headers = {
    'Authorization': API_KEY
}

# Lista de termos de busca para os produtos
termos_de_busca = [
    "placa de vídeo", "memória RAM", "processador Intel", "processador AMD",
    "SSD", "HD externo", "fonte de alimentação", "gabinete gamer",
    "teclado mecânico", "mouse gamer", "monitor", "cooler", "water cooler",
    "placa mãe", "notebook gamer", "webcam", "microfone", "headset",
    "hub USB", "carregador USB-C", "power bank", "cadeira gamer", "mesa gamer",
    "controle Xbox", "controle PS5", "placa de captura", "smartphone", "tablet",
    "smartwatch", "roteador Wi-Fi", "adaptador Bluetooth", "drive externo",
    "leitor de cartão", "estabilizador", "nobreak", "switch HDMI", "RTX 4090",
    "RTX 4080", "GTX 1660", "Intel i9", "Intel i7", "Intel i5", "Ryzen 9",
    "Ryzen 7", "Ryzen 5", "SSD NVMe", "HD 4TB", "fonte 850W", "fonte 750W",
    "gabinete RGB"
]

# Diretório para salvar as imagens
diretorio_imagens = 'public'
os.makedirs(diretorio_imagens, exist_ok=True)

# Função para baixar imagens
def baixar_imagens():
    for idx, termo in enumerate(termos_de_busca, start=1):
        params = {
            'query': termo,
            'per_page': 1
        }
        response = requests.get('https://api.pexels.com/v1/search', headers=headers, params=params)
        if response.status_code == 200:
            dados = response.json()
            fotos = dados.get('photos')
            if fotos:
                url_imagem = fotos[0]['src']['large']
                nome_arquivo = f'produto{idx}.jpg'
                caminho_arquivo = os.path.join(diretorio_imagens, nome_arquivo)
                imagem = requests.get(url_imagem)
                with open(caminho_arquivo, 'wb') as f:
                    f.write(imagem.content)
                print(f'Imagem {nome_arquivo} baixada com sucesso.')
            else:
                print(f'Nenhuma imagem encontrada para o termo: {termo}')
        else:
            print(f'Erro ao buscar o termo: {termo}')

if __name__ == "__main__":
    baixar_imagens()
