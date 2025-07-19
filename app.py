import hashlib

from flask import Flask, render_template, url_for, redirect, request, session
import os
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import *
from flask_migrate import Migrate
from werkzeug.security import check_password_hash, generate_password_hash
from werkzeug.utils import secure_filename
from sqlalchemy.orm import relationship

#
app = Flask(__name__)
#
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#
DB_USER = os.getenv('DB_USER', 'postgres')
DB_PASSWORD = os.getenv('DB_PASSWORD', '123')
DB_HOST = os.getenv('DB_HOST', 'localhost:5432')
DB_NAME = os.getenv('DB_NAME', 'postgres')
database_path = f'postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}'
app.config['SQLALCHEMY_DATABASE_URI'] = database_path
app.config['SECRET_KEY'] = "dfglfdsgfdjsgfdjsgfdsgjfdsjgfdsbgfbdsgjfdsgfdsgb"
db = SQLAlchemy(app)
migrate = Migrate(app, db)


class User(db.Model):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)
    role = Column(String, default='member')
    product = relationship("Buy", backref="user", order_by="Buy.id")

    def add(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Catalog(db.Model):
    __tablename__ = 'catalog'
    id = Column(Integer, primary_key=True)
    catalog = Column(String)
    product = relationship("Product", backref="catalog", order_by="Product.id")

    def adc(self):
        db.session.add(self)
        db.session.commit()


class Buy(db.Model):
    __tablename__ = 'buy'
    id = Column(Integer, primary_key=True)
    photo = db.Column(db.String)
    user_id = db.Column(db.Integer, ForeignKey("user.id"))
    name = db.Column(String)
    prod_id = db.Column(String)
    by = db.Column(db.String)
    about = db.Column(db.String)
    price = db.Column(db.String)
    features = db.Column(db.String)


class Order(db.Model):
    __tablename__ = 'order'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    name = Column(String)
    img = Column(String)
    price = Column(String)
    about = Column(String)
    features = Column(String)
    by = Column(String)


class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.String)
    name = db.Column(db.String)
    by = db.Column(db.String)
    about = db.Column(db.String)
    price = db.Column(db.String)
    features = db.Column(db.String)
    catalog_id = Column(Integer, ForeignKey("catalog.id"))

    def ads(self):
        db.session.add(self)
        db.session.commit()


def online_user():
    get_user = None
    if "email" in session:
        get_user = User.query.filter(User.email == session["email"]).first()
        return get_user


@app.route('/')
def hello_world():
    user = online_user()

    return render_template("minecraft.html", user=user)


@app.route('/minecraft_Deluxe_edition')
def hello():
    user = online_user()
    return render_template("minecraftbuy.html", user=user)


@app.route('/minecraft_dungeons-Standard-edetion')
def mse():
    return render_template("minecraftDbuy.html")


@app.route('/buyIndexs')
def bis():
    user = online_user()
    if not user:
        return redirect(url_for('Logb'))
    buyed = Buy.query.filter(Buy.user_id == user.id).all()
    return render_template("Buyhtml.html", buyed=buyed, user=online_user())


@app.route('/buyIndexs')
def bi():
    return render_template("Jetboz.html")


@app.route('/minecraft_legends_deluxe-edetion')
def mlde():
    return render_template("MinecraftLDbuy.html")


@app.route('/minecraft_Standard_edetion')
def minecraft_Standard_edetion():
    return render_template("minecraftSbuy.html")


@app.route('/loginbase')
def Logb():
    return render_template("login senter.html")


@app.route('/minecraft_dungeons-Deluxe-edetion')
def md():
    return render_template("minecraftDDbuy.html")


@app.route('/minecraft_legends_Standard-edetion')
def mlse():
    return render_template("MinecraftLSbuy.html")


@app.route('/minecraft_legends_deluxe-skin-edetion')
def mldse():
    return render_template("MinecraftLDSbuy.html")


@app.route('/profile', methods=["POST", "GET"])
def profile():
    user = online_user()
    if not user:
        return redirect(url_for('Logb'))
    return render_template('profile.html', user=user)


@app.route('/ReGsecurity', methods=["POST", "GET"])
def Reg():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        password = request.form.get("password")
        hashe = generate_password_hash(password=password)
        print(name, email, password)
        add = User(name=name, email=email, password=hashe)
        add.add()

        return redirect(url_for("Log"))
    return render_template("Reg.html")


@app.route('/loginsecurity', methods=["POST", "GET"])
def Log():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        user = User.query.filter(User.email == email).first()

        if user:
            if check_password_hash(user.password, password):
                session["email"] = user.email

                return redirect(url_for("hello_world"))
            else:
                return redirect(url_for("Log"))

        return redirect(url_for("Log"))
    return render_template("log.html")


@app.route('/buy/<int:prod_id>', methods=['GET', 'POST'])
def buy(prod_id):
    product = Product.query.get(prod_id)
    user = online_user()
    if not user:
        return redirect(url_for('Logb'))
    if product:
        new_prod = Buy(
            prod_id=product.id,
            user_id=user.id,
            name=product.name,
            price=product.price,
            photo=product.img,
            by=product.by,
            about=product.about,
            features=product.features

        )
        db.session.add(new_prod)
        db.session.commit()
        return redirect(url_for('bis', user=online_user()))


@app.route('/order/<int:prod_id>', methods=['GET', 'POST'])
def order(prod_id):
    product = Buy.query.get(prod_id)
    user = online_user()
    if not user:
        return redirect(url_for('Logb'))
    if product:
        new_order = Order(
            user_id=user.id,
            name=product.name,
            price=product.price,
            img=product.photo,
            by=product.by,
            about=product.about,
            features=product.features

        )
        db.session.add(new_order)
        db.session.commit()
        return redirect(url_for('orders', user=online_user()))


@app.route('/orders')
def orders():
    user = online_user()
    if not user:
        return redirect(url_for('Logb'))
    myorder = Order.query.filter(Order.user_id == user.id).all()

    return render_template("orderhtml.html", user=user, myorder=myorder)


@app.route('/delete_fro-m_cart/<int:buy_id>', methods=["POST"])
def delete_from_cart(buy_id):
    product_to_delete = Buy.query.get(buy_id)

    if product_to_delete:
        db.session.delete(product_to_delete)
        db.session.commit()

    return redirect(url_for('bis'))


@app.route('/addproduct', methods=["POST", "GET"])
def ap():
    user = online_user()
    if not user:
        return redirect(url_for('Logb'))
    catalog = Catalog.query.all()
    if request.method == "POST":
        photo = request.files["photo"]
        name = request.form.get("name")
        price = request.form.get("price")
        by = request.form.get("by")
        about = request.form.get("about")
        features = request.form.get("features")
        catalog_id = request.form.get("catalog_id")

        photo_url = ''
        if photo:
            print(photo.filename)
            photo_file = secure_filename(photo.filename)
            photo_url = '/' + 'static/img/' + photo_file
            app.config['UPLOAD_FOLDER'] = 'static/img/'
            photo.save(os.path.join(app.config['UPLOAD_FOLDER'], photo_file))

        add = Product(name=name, price=price, img=photo_url, by=by, about=about, features=features,
                      catalog_id=catalog_id)
        add.ads()
        db.session.add(add)
        db.session.commit()

        return redirect(url_for("mkp"))
    return render_template("addproduct.html", user=user, catalog_id=catalog)


@app.route('/marketplase', methods=["POST", "GET"])
def mkp():
    users_get = online_user()
    users = Product.query.all()
    catalog = Catalog.query.all()

    return render_template("marketplase.html", users=users, users_get=users_get, catalogs=catalog)


@app.route('/create_catalog', methods=["POST", "GET"])
def create_catalog():
    user = online_user()
    if not user:
        return redirect(url_for('Logb'))
    if request.method == 'POST':
        catalog = request.form.get('catalog')
        if catalog == '':
            return redirect('create_catalog')
        add = Catalog(catalog=catalog)
        add.adc()
        db.session.add(add)
        db.session.commit()

        return redirect(url_for('mkp'))

    return render_template("create_category.html", user=user)


@app.route('/logaut')
def logaut():
    session["email"] = None
    return redirect(url_for("Logb"))


@app.route('/adminpage')
def admin():
    user = online_user()
    if user.role == "admin":
        return "Hello this admin page"
    else:
        return "You no admin"


@app.route('/userlist')
def uslist():
    user = online_user()
    if not user:
        return redirect(url_for('Logb'))
    users = User.query.all()

    users_get = online_user()
    return render_template("user_list.html", users=users, users_get=users_get)


@app.route('/info_product/<int:prod_id>')
def info_product(prod_id):
    users_get = online_user()
    users = Product.query.filter(Product.id == prod_id).all()
    return render_template('info_product.html', users=users, users_get=users_get)


if __name__ == '__main__':
    app.run()
