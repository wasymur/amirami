from . import views
from django.conf.urls import url
urlpatterns = [
    url(r'^just_test/', views.test_view),
]
