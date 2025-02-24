import { log } from "@clack/prompts"
import { seed } from "drizzle-seed"

import { runProcess, runScript } from "@tooling/helpers"

import * as schema from "../src/schema"

async function main() {
  const { db } = await import("../src")

  log.info("Seeding database...")

  await runProcess("drizzle-kit", ["push"])

  console.time("Seeded database")
  // @ts-expect-error -- TODO: find out if this error is due to drizzle-seed or
  // the schema
  await seed(db, schema).refine(f => ({
    users: {
      columns: {
        name: f.fullName(),
        role: f.valuesFromArray({
          values: ["admin", "user"],
        }),
      },

      count: 10,
      with: {
        accounts: 1,
      },
    },
    organizations: {
      columns: {
        name: f.companyName(),
      },
      count: 10,
    },
    verifications: {
      columns: {
        id: f.intPrimaryKey(),
      },
    },
  }))
  console.timeEnd("Seeded database")

  log.info("Database seeded!")
}

runScript(main)
