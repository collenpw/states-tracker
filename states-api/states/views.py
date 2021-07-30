from rest_framework import generics
from .models import State
from .serializers import StateSerializer
# Create your views here.

class StateList(generics.ListCreateAPIView):
    queryset = State.objects.all()
    # state_list=list(states)
    serializer_class = StateSerializer

class StateDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = State.objects.all()
    serializer_class = StateSerializer