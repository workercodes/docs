INSTALL KONG
kubectl apply -f https://bit.ly/k4k8s

INSTALL KUMA
curl -L https://kuma.io/installer.sh | sh -
kuma-1.0.5/bin
./kumactl install control-plane | kubectl apply -f -

kubectl get pod -n kuma-system

INSTALL CERT_MANAGER
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.1.0/cert-manager.yaml


kubectl apply -f ./deployment.yml
kubectl apply -f ./service.yml
kubectl apply -f ./certissuer.yml
kubectl apply -f ./ingress.yml



name: ci
on:
  push:
    branches: master
jobs:
  login:
    runs-on: ubuntu-latest
    steps:
      -
        name: Checkout
        uses: actions/checkout@v2
      -
        name: Login to GitHub Package Registry
        uses: docker/login-action@v1
        with:
          registry: ghcr.io
          username: ${{ github.repository_owner }}
          password: ${{ secrets.GHCR_TOKEN }}


docker build -t docker.pkg.github.com/workercodes/server/workercodes-backend:lastest .
docker push docker.pkg.github.com/workercodes/server/workercodes-backend:lastest
