use std::{fs, path::PathBuf};

fn filter_extensions(path: &PathBuf) -> bool {
    let acceptable_extensions: Vec<String> =
        vec!["png".to_string(), "jpg".to_string(), "jpeg".to_string()];

    let extension = path.extension();

    match extension {
        Some(ext) => {
            return acceptable_extensions.contains(&ext.to_os_string().into_string().unwrap())
        }
        None => return false,
    }
}

pub fn get_filenames(search: &str) -> Vec<std::path::PathBuf> {
    // TODO: remove hardcoded
    let paths = fs::read_dir("E:\\stf")
        .unwrap()
        .filter_map(|file| {
            file.ok().and_then(|entry| {
                let path = entry.path();
                if filter_extensions(&path) && path.to_str().unwrap().contains(search) {
                    Some(path)
                } else {
                    None
                }
            })
        })
        .collect();

    paths
}
