from flask import Flask, render_template, request, g

app = Flask(__name__)


# Enable hot reloading and debug mode
app.config.update(
    DEBUG=True,
    TEMPLATES_AUTO_RELOAD=True,
    SEND_FILE_MAX_AGE_DEFAULT=0
)

# Country and phone/mail data
country_phone_mapping = {
    'Canada': '+1 (780) 228-9651',
    'UK': '+44 20 7946 0958',
    'Qatar': '+974 4452 5555',
    'India': '+91 98765 43210'
}

country_mail_mapping = {
    'Canada': 'sales.canada@lloydsbureau.com',
    'UK': 'sales.unitedkingdom@lloydsbureau.com',
    'Qatar': 'sales.qatar@lloydsbureau.com',
    'India': 'sales.india@lloydsbureau.com'
}

# Function to get phone number
def get_phone_number(selected_country):
    return country_phone_mapping.get(selected_country, '+1 (780) 228-9651')  # Default is Canada

# Function to get mail
def get_mail(selected_country):
    return country_mail_mapping.get(selected_country, 'info.ca@example.com')  # Default is Canada

@app.before_request
def set_contact_info():
    # Default values
    g.selected_country = 'Canada'
    g.phone = get_phone_number('Canada')
    g.mail = get_mail('Canada')

    # Update values if country is selected via POST
    if request.method == "POST" and request.form.get("country"):
        g.selected_country = request.form.get("country")
        g.phone = get_phone_number(g.selected_country)
        g.mail = get_mail(g.selected_country)

@app.route("/", methods=["GET", "POST"])
def index():
    return render_template('index.html', country=g.selected_country, phone=g.phone, mail=g.mail)

@app.route("/about-us")
def about():
    return render_template("about.html", country=g.selected_country, phone=g.phone, mail=g.mail)


@app.route("/services")
def service():
    return render_template("service.html", country=g.selected_country, phone=g.phone, mail=g.mail)


@app.route("/training-courses")
def training():
    return render_template("training.html", country=g.selected_country, phone=g.phone, mail=g.mail)

@app.route("/partner-profile")
def partner():
    return render_template("partnerProfile.html", country=g.selected_country, phone=g.phone, mail=g.mail)


@app.route("/contact")
def Contact():
    return render_template("contact.html", country=g.selected_country, phone=g.phone, mail=g.mail)


@app.route("/Verifycertificate")
def Verify_certificate():
    return render_template("Verify_certificate.html", country=g.selected_country, phone=g.phone, mail=g.mail)

@app.route("/news-blogs")
def news_blogs():
    return render_template("news_blogs.html", country=g.selected_country, phone=g.phone, mail=g.mail)


@app.route("/careers")
def careers():
    return render_template("careers.html", country=g.selected_country, phone=g.phone, mail=g.mail)

if __name__ == '__main__':
    app.run(
        debug=True,
        use_reloader=True,
        host='0.0.0.0',
        port=5000
    )



