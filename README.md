# SSIE Physician Medicine Module

Responsive React + Vite demonstration of the physician workflow for Stavya Spine Hospital.

## Run

```bash
npm install
npm run dev -- --port 5176
```

Open `http://localhost:5176`.

## Deployed application

The `main` branch deploys automatically through GitHub Actions to:

https://hb2810.github.io/physician-module/

## Demonstration sign-in

There are no quick-login controls. Enter an employee code and the shared demonstration password `1234`.

- `12` or `17`: Consultant Physician (can sign assessments and fitness)
- `306`, `309`, or `311`: Junior Physician/Resident (draft only; cannot issue fitness)
- `1`: System Admin (Department Master access)

These identities were selected from the supplied Stavya organisation chart. The patient records are fictional demonstration data.

## Routes

Hash routes are available for dashboard, queue, patients, assessment, optimization, fitness, orders, laboratory results, radiology imaging, notes, handover, completed cases, reports, and department master.

## Prototype boundary

The supplied workspace was empty. This build therefore uses browser persistence for demonstration actions and is not connected to the existing SSIE Node/MySQL system. Before production deployment, replace the demo authentication and storage adapters with the hospital API, server-side RBAC, database migrations, encrypted credentials, and clinical audit services.
