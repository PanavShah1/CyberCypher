from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",  # Added a comma here
    "http://localhost:3000",
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

people = []
people.append(['Mary Cruise' ,'3928374637', 'xyz', 'patient'])
people.append(['Danial Smith', '3495837293', 'abc', 'doctor'])

@app.post("/login_user")
async def main(values: dict):
    num = values['username']
    key = values['password']  # Corrected the key to match the client payload
    print("Doin")
    # if num in people:
    for i in people:
        if i[1]==str(num) and i[2]==key:
            return {'outcome': 'success', 
                    'type': i[3],
                    'message': 'user exists'}
    
    return {'outcome': 'fail',
    'message': 'go to login'}

    # if username in people.keys():
    #     if people[username]==key:
    #         return {'outcome': 'success', 
    #             'message': 'user exists'}
    
    # # people.add(username)

    # return {'outcome': 'fail',
    #     'message': 'go to login'}
@app.post("/create_user")
async def main(values: dict):
    name = values['name']
    phone = values['phone']
    key = values['password']  # Corrected the key to match the client payload
    print("Doin")
    # if num in people:
    if [name,phone,key, 'patient'] not in people:
        people.append([name,phone,key, 'patient'])
        return {'outcome': 'success', 
                'message': 'user created'}
    else:
        return {'outcome': 'fail', 
                'message': 'user exists'}


@app.post("/create_doc")
async def main(values: dict):
    name = values['name']
    phone = values['phone']
    key = values['password']  # Corrected the key to match the client payload
    print("Doin")
    # if num in people:
    if [name,phone,key, 'patient'] not in people:
        people.append([name,phone,key, 'doctor'])
        return {'outcome': 'success', 
                'message': 'user created'}
    else:
        return {'outcome': 'fail', 
                'message': 'user exists'}