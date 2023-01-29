export async function cleanup() {
  try {
    await Deno.remove("./tmp", { recursive: true });
  }
  catch (_) {
    //Only remove if exists
  }
}
