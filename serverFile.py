import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, File, UploadFile
from google.cloud import storage

app = FastAPI()

storage_client = storage.Client.from_service_account_json('acn-uki-ds-data-ai-project-5ff8dcf544cc.json')
bucket_name_one = 'document-extractor-input'  
bucket_name_two = 'document-extractor-success'

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/upload')
async def upload_files(files: list[UploadFile] = File(...)):
    try:
        for file in files:
            file_name = file.filename

            bucket = storage_client.bucket(bucket_name_one)
            blob = bucket.blob(file_name)

            blob.upload_from_file(file.file, content_type=file.content_type)

            print(f'File {file_name} uploaded successfully!')

        return {'message': 'Files uploaded successfully!'}
    except Exception as e:
        print('Error uploading files:', e)
        return {'message': 'Error uploading files'}
    

@app.post('/success')
async def upload_files(file: UploadFile = File(...)):
    try:       

        file_name = file.filename

        bucket = storage_client.bucket(bucket_name_two)
        blob = bucket.blob(file_name)

        blob.upload_from_file(file.file, content_type=file.content_type)

        print(f'File {file_name} uploaded successfully!')

        return {'message': 'Files uploaded successfully!'}
    except Exception as e:
        print('Error uploading files:', e)
        return {'message': 'Error uploading files'}


    

