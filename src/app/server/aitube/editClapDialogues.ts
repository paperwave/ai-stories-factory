"use server"

import { ClapProject } from "@aitube/clap"
import { editClapDialogues as apiEditClapDialogues, ClapCompletionMode } from "@aitube/client"

import { getToken } from "./getToken"
import { Workaround } from "./types"

export async function editClapDialogues({
  clap,
  turbo = false,
}: {
  clap: ClapProject
  turbo?: boolean
}): Workaround<ClapProject> {
  async function promise() {
    return await apiEditClapDialogues({
      clap,
      completionMode: ClapCompletionMode.MERGE,
      turbo,
      token: await getToken()
    })
  }

  return { 
    promise: promise()
  }
}