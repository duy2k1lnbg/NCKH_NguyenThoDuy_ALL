from django.db import models

# Create your models here.
class CONSTROL(models.Model):
    STATUS_TYPES = (
        ('Quạt', 'Quạt'),
        ('Quạt trần', 'Quạt trần'),
        ('Điều hòa', 'Điều hòa'),
        ('Máy bơn nước', 'Máy bơn nước'),
        ('Bóng đèn', 'Bóng đèn')
    )
    STATUS = models.IntegerField(default = 0)
    NAME = models.CharField(max_length = 255)
    TYPE = models.CharField(max_length = 50, null=False, choices=STATUS_TYPES)

    def __str__(self):
        template = '{0.STATUS} {0.NAME} {0.TYPE}'
        return template.format(self)