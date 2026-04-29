# Day 20 - Kubernetes Networking & Ingress

## Objective
Implemented Kubernetes Service and Ingress for load balancing and traffic routing.

---

## Components Used
- Deployment (Node.js API)
- Service (LoadBalancer)
- Ingress Controller (NGINX)

---

## Key Features
- 10 replicas for high availability
- Load balancing using Kubernetes Service
- Path-based routing using Ingress
- Zero downtime deployment tested

---

## Commands Used
- kubectl apply -f k8s/
- kubectl scale deployment api-deployment --replicas=10
- kubectl get pods
- kubectl get svc
- kubectl get ingress

---

## Reflection

Ingress is better than multiple LoadBalancer services because it provides a single entry point for all services, reduces cost, simplifies routing, and improves scalability.