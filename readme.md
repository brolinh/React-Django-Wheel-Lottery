node >18.10.0
python  = 3.11.4

### frontend
cd frontend
npm install

### backend
pip install virtualenv
virtualenv myenv
myenv\scripts\activate
cd backend

pip install -r requirements.txt

python manage.py runserver