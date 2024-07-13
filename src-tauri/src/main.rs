#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod io;

#[tauri::command]
fn send_search(search: &str) -> Vec<std::path::PathBuf> {
    let filenames = io::get_filenames(search);

    filenames
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![send_search])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
