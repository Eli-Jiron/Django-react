from django.urls import include, path

from . import views
from .router import router_post

urlpatterns = [
    path("hello-world/", views.helloworld, name="hello-world"),
    path("post/", include(router_post.urls)),
]
