from django.test import TestCase
from django.urls import reverse


class HomePageTests(TestCase):
    def test_homepage_uses_static_assets(self):
        response = self.client.get(reverse('homepage'))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'href="/static/freddyfazbearPizzaria/css/home.css"')
        self.assertContains(response, 'src="/static/freddyfazbearPizzaria/script/home.js"')
