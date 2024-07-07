use std::{ffi::OsStr, fs, io};

pub fn get_filenames() -> Vec<std::path::PathBuf> {
    let acceptable_extensions: Vec<String> =
        vec!["png".to_string(), "jpg".to_string(), "jpeg".to_string()];

    // TODO: remove hardcoded
    let paths = fs::read_dir("E:\\stf")
        .unwrap()
        .filter_map(|file| {
            file.ok().and_then(|entry| {
                let path = entry.path();
                if acceptable_extensions
                    .contains(&path.extension()?.to_os_string().into_string().unwrap())
                {
                    Some(path)
                } else {
                    None
                }
            })
        })
        .collect();

    paths
}
