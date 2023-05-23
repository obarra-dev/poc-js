import * as fs from "fs";
import * as path from "path";
import * as temp from "temp";
import * as cp from "child_process";

function exec(
  command: string,
  options: cp.ExecOptions
): Promise<{ stdout: string; stderr: string }> {
  options.env = { ...process.env, ...options.env };

  return new Promise<{ stdout: string; stderr: string }>((resolve, reject) => {
    cp.exec(command, options, (error, stdout, stderr) => {
      if (error) {
        reject({ error, stdout, stderr });
      }
      resolve({ stdout, stderr });
    });
  });
}

class MavenUtils {
  public async getDependencyArray(): Promise<any> {
    const workspaceFolder = "/home/omarbarra/development/muse/jvm";
    let mvnCommand: string = "TBC";
    try {
      const pomFile = path.join(workspaceFolder, "pom.xml");

      const tmpFile = temp.openSync();

      mvnCommand = `mvn dependency:tree -Dverbose -DappendOutput=true -DoutputFile="${tmpFile.path}" -f "${pomFile}"`;

      await exec(mvnCommand, {
        cwd: workspaceFolder,
      });

      if (!fs.existsSync(tmpFile.path)) {
        return Promise.reject(
          new Error(
            "Error occurred in generating dependency tree. Please check that maven is on your PATH."
          )
        );
      }
      const dependencyTree: string = fs.readFileSync(tmpFile.path).toString();
      temp.cleanupSync();

      return Promise.resolve(dependencyTree);
    } catch (e) {
      console.debug(e);
      let errorMessage = `${mvnCommand} command failed - try running it mannually to see what went wrong`;
      if (e instanceof Error) {
        errorMessage += `. Error is ${e.message}`;
      }
      return Promise.reject(errorMessage);
    }
  }
}

function runTest(): void {
  try {
    const mavenUtils = new MavenUtils();
    mavenUtils
      .getDependencyArray()
      .then((deps) => {
        console.log(deps);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (e) {
    console.log(e);
  }
}

runTest();
